import {AttachmentsSchema} from "../components/FieldsetWithAttachments.tsx";

export const useFormWithAttachments = () => {
    const submitAction = async <T extends { attachments?: AttachmentsSchema }>(data: T) => {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });

        if (data.attachments) {
            const formData = new FormData();
            data.attachments.forEach((attachment: File) => {
                formData.append('attachment[]', attachment);
            });

            console.log('submitting attachments', formData);
        }

        console.log('submitted!', data);
    };

    return {
        submitAction
    }
}