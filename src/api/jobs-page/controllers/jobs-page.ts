/**
 * jobs-page controller
 */

import { factories } from "@strapi/strapi";

// Populate all nested fields needed to render the jobs page in one request.
const defaultPopulate = {
  Hero: {
    populate: {
      backgroundImage: true,
    },
  },
  whychooseus: {
    populate: {
      cards: {
        populate: {
          icons: true,
          jobstags: true,
        },
      },
    },
  },
  jobs: {
    populate: {
      cards: {
        populate: {
          icons: true,
          jobstags: true,
        },
      },
    },
  },

  BenefitsSection: {
    populate: {
      Benefits: {
        populate: {
          Icon: true,
        },
      },
    },
  },
  positions: {
    fields: [
      "Title",
      "Slug",
      "EmploymentType",
      "Location",
      "Description",
      "Department",
      "ApplyUrl",
      "Order",
      "IsActive",
    ],
    filters: {
      IsActive: {
        $eq: true,
      },
    },
    sort: ["Order:asc", "Title:asc"],
  },
  CTA: {
    populate: {
      primaryButton: true,
      secondaryButton: true,
    },
  },
};

export default factories.createCoreController(
  "api::jobs-page.jobs-page",
  () => ({
    async find(ctx) {
      // Keep explicit frontend population requests intact; use this complete shape by default.
      if (!ctx.query.populate || ctx.query.populate === "*") {
        ctx.query.populate = defaultPopulate;
      }

      return await super.find(ctx);
    },
  }),
);
