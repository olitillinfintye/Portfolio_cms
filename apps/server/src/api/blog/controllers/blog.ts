/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({

    async findOne(ctx) {
        const { id: slug } = ctx.params;
        const entity = await strapi.db.query("api::blog.blog").findOne({
            where: { slug },
            populate: { thumbnail: true, category: true },
        });
        return entity;
    },
}));


