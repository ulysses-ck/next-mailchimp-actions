"use server";

/**
 * @param prevState previous state
 * @param prevState.message
 * @param prevState.status
 * @param {FormData} formData
 * @returns {Object}
 */
export async function suscribeEmail(_, formData) {
  const email = formData.get("email");

  if (!email) return { message: "Email is required", status: 400 };

  const dataCenter = process.env.MAILCHIMP_DATA_CENTER;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const fullUrl = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members?skip_merge_validation=true`;

  const response = await fetch(fullUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  });

  if (response.ok) {
    return { message: "You have been subscribed", status: response.status };
  }
  const json = await response.json();

  return { message: json.title, status: response.status };
}
