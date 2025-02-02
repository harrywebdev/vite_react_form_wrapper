import { FC } from "react";
import { z } from "zod";

type FieldsetWithAttachmentsProps = {
  attachments: AttachmentsSchema;
  setAttachments: (
    attachments: (previousAttachments: AttachmentsSchema) => AttachmentsSchema,
  ) => void;
};

export const AttachmentsSchema = z.array(z.instanceof(File));
export type AttachmentsSchema = z.infer<typeof AttachmentsSchema>;

const FieldsetWithAttachments: FC<FieldsetWithAttachmentsProps> = ({
  attachments,
  setAttachments,
}) => {
  return (
    <fieldset>
      <legend>Prilohy</legend>
      {attachments.length > 0 ? (
        <ul>
          {attachments.map((attachment, index) => (
            <li className="item-attachment" key={index}>
              <span>{attachment.name}</span>
              <button
                onClick={() =>
                  setAttachments((attachments) =>
                    attachments.filter((_, i) => i !== index),
                  )
                }
              >
                Odstranit
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      <p>
        <label htmlFor="attachment">Attachment:</label>
        <input
          type="file"
          id="attachment"
          name="attachment"
          onChange={(event) => {
            const files = event.target.files;
            if (files) {
              setAttachments((attachments) => [
                ...attachments,
                ...Array.from(files),
              ]);
            }
          }}
          multiple
        />
      </p>
    </fieldset>
  );
};

export default FieldsetWithAttachments;
