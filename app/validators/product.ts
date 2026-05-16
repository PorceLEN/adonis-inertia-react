import vine from "@vinejs/vine"

export const productValidator = vine.create({
    name: vine.string().trim().maxLength(2000),
    description: vine.string().trim().maxLength(2000).optional(),
    price: vine.number().positive().max(1_000_000),
    stock: vine.number().withoutDecimals().optional(),
    category: vine.string().trim().maxLength(50).optional(),
    imageUrl: vine.string().url().optional(),
    isActive: vine.boolean().optional()
})