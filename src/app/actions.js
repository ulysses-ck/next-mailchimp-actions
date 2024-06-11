"use server";

export async function suscribeEmail(formData) {
  console.log(formData);

  return { message: "Email suscribed!", status: 200 };
}
