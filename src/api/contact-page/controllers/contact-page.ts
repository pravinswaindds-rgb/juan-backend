/**
 * contact-page controller
 */

import { factories } from "@strapi/strapi";

// Populate the complete Contact Page shape for the frontend in one request.
const defaultPopulate = {
  Hero: {
    populate: {
      backgroundImage: true,
    },
  },
  ContactForm: {
    populate: {
      Items: {
        populate: {
          Icon: true,
        },
      },
      ContactForm: {
        populate: {
          SubmitButton: true,
        },
      },
    },
  },
  Map: true,
  CTA: {
    populate: {
      primaryButton: true,
      secondaryButton: true,
    },
  },
};

export default factories.createCoreController(
  "api::contact-page.contact-page",
  () => ({
    async find(ctx) {
      // Preserve an explicit frontend population query when one is supplied.
      if (!ctx.query.populate || ctx.query.populate === "*") {
        ctx.query.populate = defaultPopulate;
      }

      return await super.find(ctx);
    },
  }),
);
