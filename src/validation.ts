import { z } from 'zod'

const forbiddenPattern =
  /(contraseña|password|llave privada|private key|expediente real|paciente real)/i

export const smeSetupSchema = z.object({
  name: z.string().trim().min(3, 'Escribe el nombre de la empresa.'),
  industry: z.string().trim().min(3, 'Escribe el giro.'),
  employees: z.string().min(1, 'Selecciona el tamaño.'),
  location: z.string().trim().min(3, 'Escribe la ubicación.'),
  systems: z.array(z.string()).min(1, 'Selecciona al menos un sistema.'),
})

export const incidentFormSchema = z.object({
  whatHappened: z
    .string()
    .trim()
    .min(12, 'Describe qué ocurrió, sin datos secretos.')
    .refine((value) => !forbiddenPattern.test(value), {
      message: 'No ingreses contraseñas, llaves privadas ni datos reales de pacientes.',
    }),
  whenNoticed: z.string().trim().min(3, 'Indica cuándo lo notaste.'),
  systemsAffected: z
    .string()
    .trim()
    .min(3, 'Indica qué sistemas están afectados.'),
  informationInvolved: z
    .string()
    .trim()
    .min(8, 'Describe el tipo de información, sin datos reales.')
    .refine((value) => !forbiddenPattern.test(value), {
      message: 'No ingreses contraseñas, llaves privadas ni datos reales de pacientes.',
    }),
})

export function firstZodError(error: z.ZodError): string {
  return error.issues[0]?.message ?? 'Revisa el formulario.'
}
