import { AttachmentsSchema } from "../components/FieldsetWithAttachments.tsx";

export const useFormWithAttachments = () => {
  const submitAction = async <T extends { attachments?: AttachmentsSchema }>(
    data: T,
  ) => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    if (data.attachments) {
      console.log("submitting w/attachments");
    }

    console.log("submitted!", data);
  };

  return {
    submitAction,
  };
};
