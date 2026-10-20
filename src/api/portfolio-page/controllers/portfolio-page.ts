/**
 * portfolio-page controller
 */

import { factories } from "@strapi/strapi";

const defaultPopulate = {
  Heroo: {
    populate: {
      backgroundImage: true,
    },
  },
  PortfolioProjects: {
    populate: {
      project: {
        populate: {
          thumbnail: true,
        },
      },
    },
  },
};

export default factories.createCoreController(
  "api::portfolio-page.portfolio-page",
  ({ strapi }) => ({
    async find(ctx) {
      // If the frontend doesn't specify a populate query, or just asks for "*", we inject our deep populate object
      if (!ctx.query.populate || ctx.query.populate === "*") {
        ctx.query.populate = defaultPopulate;
      }

      return await super.find(ctx);
    },
  }),
);
