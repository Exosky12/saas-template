import prisma from "../src/prisma-client";

describe("PrismaClient Singleton", () => {
  it("should have a single instance of PrismaClient", () => {
    const anotherPrisma = require("../prisma/prisma-client").default;

    expect(prisma).toBe(anotherPrisma);
  });
});
