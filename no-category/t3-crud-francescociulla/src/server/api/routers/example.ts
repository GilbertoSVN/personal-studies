import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const idSchema = z.object({ id: z.string().uuid() })

const userSchema = z.object({
  name: z.string(),
  email: z.string().email()
})

const userUpdateSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email()
})

export const userRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),

  getOne: publicProcedure.input(idSchema).query(({ input, ctx }) => {
    return ctx.prisma.user.findUnique({
      where: idSchema.parse(input)
    })
  }),

  createUser: publicProcedure.input(userSchema).mutation(({ input, ctx }) => {
    return ctx.prisma.user.create({
      data: userSchema.parse(input)
    })
  }),

  updateUser: publicProcedure.input(userUpdateSchema).mutation(({ input, ctx }) => {
    return ctx.prisma.user.update({
      where: {
        id: input.id.toString()
      },
      data: userUpdateSchema.parse(input)
    })
  }),

  deleteUser: publicProcedure.input(idSchema).mutation(({ input, ctx }) => {
    return ctx.prisma.user.delete({
      where: idSchema.parse(input)
    })
  })
});
