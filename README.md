# ESCUDO PyME

Ciberseguridad clara para una PyME mexicana: priorizar acciones, verificar que se hicieron y responder un incidente simulado con una persona a cargo.

## ¿Para quién es?

Dueña o gerente de una PyME con exposición digital y sin equipo interno de ciberseguridad. En la demo, la empresa sintética es **Clínica Sonrisa CDMX**. El actor operativo es un proveedor de TI externo. La salvaguarda humana es una coordinadora de respuesta nombrada.

## Vacío declarado: SME SHIELD

El recorte de trabajo no es otro antivirus. Es el puente entre preparación y respuesta: qué importa primero, si la acción se verificó, quién responde y quién decide cuando hay un incidente.

## Flujo de la demo

1. Inicio
2. Alta sintética de la PyME
3. Prioridades actuales (sin puntaje de seguridad)
4. Detalle de acción y estados de verificación
5. Incidente simulado
6. Formulario validado
7. Análisis etiquetado como salida simulada de IA
8. Tareas, responsable y plazo
9. Revisión humana
10. Borrador de notificación
11. Línea de tiempo del caso

## Dragon Stack

LLM + datos de seguridad estructurados + automatización.

- El LLM (o su fallback simulado) explica, resume y redacta.
- Los controles, tipos de incidente y acciones viven en datos locales estructurados.
- La automatización mueve estados: Recomendado → Pendiente de verificación → Verificado por humano; y el caso de incidente hasta el cierre.

## Piso de seguridad

- Solo datos sintéticos.
- Sin secretos en el repositorio.
- `.env` y `.env.local` están en `.gitignore`.
- Los formularios se validan.
- La IA no cuenta como verificación humana.
- La app no dice que la organización está segura.
- No pide contraseñas, llaves privadas ni documentos reales de pacientes.

## Qué es sintético

Empresa, personas, incidente, plazos, coordinadora y marcas de tiempo de la demo.

## Qué es simulado

El análisis y el borrador de notificación. Sin una API real, la interfaz muestra **Salida simulada de IA** / **SALIDA SIMULADA DE IA**. No se llama a un modelo.

## Lo que el producto NO afirma

- No es antivirus, motor de malware ni SOC.
- No paga rescates, no negocia con atacantes y no envía notificaciones solas.
- No certifica cumplimiento ni da asesoría legal.
- No es tecnológicamente superior a Cyber Essentials, Huntress o Coalition; localiza un patrón de preparación y respuesta para una PyME mexicana.

## Cómo correr en local

```bash
npm install
npm run dev
```

Abre la URL local que imprima Vite. El diseño está pensado primero para ~390px; el escritorio también debe funcionar.

## Cómo construir

```bash
npm run build
```

## Despliegue futuro en Vercel

Aún no hay despliegue. El siguiente paso previsto es crear el repositorio en GitHub, subir esta historia de Git y hacer el primer deploy en Vercel.
