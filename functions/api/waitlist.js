export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();

    const email = String(formData.get("email") || "").trim();
    const platform = String(formData.get("platform") || "Unknown").trim();
    const printerModel = String(formData.get("printerModel") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const company = String(formData.get("company") || "").trim();

    if (company) {
      return json({ ok: true, message: "Thanks. You’re on the list." });
    }

    if (!email) {
      return json({ error: "Please add your email address." }, 400);
    }

    if (!context.env.WAITLIST_EMAIL || typeof context.env.WAITLIST_EMAIL.send !== "function") {
      return json(
        {
          error:
            "The form is live, but email sending is not configured yet. Add the WAITLIST_EMAIL binding in Cloudflare Pages and try again.",
        },
        500,
      );
    }

    const from = context.env.WAITLIST_FROM_EMAIL || "support@print-it-app.com";
    const to = context.env.WAITLIST_TO_EMAIL || "support@print-it-app.com";

    const subject = `[Print-It waitlist] ${platform} - ${email}`;
    const text = [
      "New waitlist submission",
      "",
      `Email: ${email}`,
      `Platform: ${platform}`,
      `Printer model: ${printerModel || "Not provided"}`,
      "",
      "Message:",
      message || "No message provided",
      "",
      `IP country: ${context.request.cf?.country || "Unknown"}`,
      `User agent: ${context.request.headers.get("user-agent") || "Unknown"}`,
    ].join("\n");

    const html = `
      <h1>New waitlist submission</h1>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Platform:</strong> ${escapeHtml(platform)}</p>
      <p><strong>Printer model:</strong> ${escapeHtml(printerModel || "Not provided")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message || "No message provided").replace(/\n/g, "<br />")}</p>
    `;

    await context.env.WAITLIST_EMAIL.send({
      to,
      from,
      subject,
      text,
      html,
      replyTo: email,
    });

    return json({ ok: true, message: "You’re on the list. We’ll be in touch." });
  } catch (error) {
    return json(
      {
        error:
          error instanceof Error
            ? error.message
            : "We couldn’t submit the form right now. Please try again in a minute.",
      },
      500,
    );
  }
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
