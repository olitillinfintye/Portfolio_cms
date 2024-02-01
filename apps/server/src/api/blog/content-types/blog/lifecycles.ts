import handleRevalidate from "../../../../utils/handleRevalidate";

export default {
    async afterCreate(event) {
        handleRevalidate({ tags: ["getBlogs",] })
    },
    async afterUpdate(event) {
        handleRevalidate({ tags: ["getBlogs",] })
    },
    async afterDelete(event) {
        handleRevalidate({ tags: ["getBlogs",] })
    },
};
