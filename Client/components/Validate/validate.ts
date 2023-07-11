import { z } from "zod";
export const validate = z.object({
	name: z.string().nonempty("* El nombre es requerido"),
	lote: z
		.number()
		.refine((val) => val !== 0 || val === null, {
			message: "* El lote es requerido",
		}),
	area: z
		.number()
		.refine((val) => val !== 0 || val === null, {
			message: "* El área es requerida",
		}),
	price: z
		.number()
		.refine((val) => val !== 0 || val === null, {
			message: "* El precio es requerido",
		}),
	location: z.string().nonempty("* La ubicación es requerida"),
	description: z.string().nonempty("* La descripción es requerida"),
	image: z.array(z.string()).min(1, "* Al menos una imagen es requerida"),
	user: z.string(),
});
