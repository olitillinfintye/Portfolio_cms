import handleRevalidate from "../../../../utils/handleRevalidate";

export default {
    async afterCreate(event) {
        handleRevalidate({ tags: ["getPortfolios",] })
    },
    async afterUpdate(event) {
        handleRevalidate({ tags: ["getPortfolios",] })
    },
    async afterDelete(event) {
        handleRevalidate({ tags: ["getPortfolios",] })
    },
};
