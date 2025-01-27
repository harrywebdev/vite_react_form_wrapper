import { ReactNode, useState } from "react";
import { useFormWithAttachments } from "../hooks/use-form-with-attachments.ts";
import FieldsetWithAttachments, {
  AttachmentsSchema,
} from "./FieldsetWithAttachments.tsx";

type FormDataWithAttachments<T> = T & { attachments: AttachmentsSchema };

type FormWithAttachmentsProps<T> = {
  children: (
    onSubmit: (data: T) => Promise<void>,
    attachmentsFieldset: ReactNode,
  ) => ReactNode;
  hasAttachments?: boolean;
};

const FormWithAttachments = <T,>({
  children,
  hasAttachments,
}: FormWithAttachmentsProps<T>) => {
  const { submitAction } = useFormWithAttachments();
  const [attachments, setAttachments] = useState<AttachmentsSchema>([]);

  function onSubmit(data: T) {
    const dataWithAttachments = {
      ...data,
      attachments: hasAttachments ? attachments : [],
    };

    return submitAction<FormDataWithAttachments<T>>(dataWithAttachments);
  }

  const attachmentsFieldset = (
    <FieldsetWithAttachments
      attachments={attachments}
      setAttachments={setAttachments}
    />
  );

  return children(onSubmit, hasAttachments ? attachmentsFieldset : null);
};

export default FormWithAttachments;
