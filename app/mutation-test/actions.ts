"use server";
export type FormAction = {
  $$id: string;
} & ((formData: FormData | URLSearchParams) => any);

export const action = (formData: FormData | URLSearchParams) => {
  console.log({ formData });
  return {
    errors: {
      name: ["error 1", "error 2"],
    },
    data: formData,
  };
};
