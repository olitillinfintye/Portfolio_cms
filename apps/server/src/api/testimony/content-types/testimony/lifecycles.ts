import handleRevalidate from "../../../../utils/handleRevalidate";

export default {
    async afterCreate(event) {
        handleRevalidate({ tags: ["getTestimonies",] })
    },
    async afterUpdate(event) {
        handleRevalidate({ tags: ["getTestimonies",] })
    },
    async afterDelete(event) {
        handleRevalidate({ tags: ["getTestimonies",] })
    },
};
