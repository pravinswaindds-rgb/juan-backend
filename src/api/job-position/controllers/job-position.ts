/**
 * job-position controller
 */

import { factories } from "@strapi/strapi";

// Job Position currently has no relations, media, or components, but this
// automatically includes any populate-able fields added in the future.
const defaultPopulate = "*";

export default factories.createCoreController(
  "api::job-position.job-position",
  () => ({
    async find(ctx) {
      if (!ctx.query.populate) {
        ctx.query.populate = defaultPopulate;
      }

      // Supply a stable display order while allowing the frontend to override it.
      if (!ctx.query.sort) {
        ctx.query.sort = ["Order:asc", "Title:asc"];
      }

      return await super.find(ctx);
    },
  }),
);
