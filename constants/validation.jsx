const RUTpattern = /^[0-9]{7,8}-[0-9Kk]{1}$/;
const calculateCheckDigit = (rut) => {
  let sum = 0;
  let multiplier = 2;
  for (let i = rut.length - 1; i >= 0; i--) {
    sum += rut[i] * multiplier;
    multiplier = multiplier < 7 ? multiplier + 1 : 2;
  }
  const remainder = 11 - (sum % 11);
  if (remainder === 11) return "0";
  if (remainder === 10) return "K";
  return remainder.toString();
};
const validateRUT = (rut) => {
  if (!RUTpattern.test(rut)) return false;
  const [number, checkDigit] = rut.split("-");
  return calculateCheckDigit(number) === checkDigit.toUpperCase();
};

export const rut = {
  required: "Este campo es obligatorio",
  pattern: {
    value: /^[0-9]{7,8}-[0-9Kk]{1}$/,
    message: "El formato del RUT debe ser 12345678-k",
  },
  validate: (value) => validateRUT(value) || "El RUT no es válido",
};

export const p_nombre = {
  required: "Este campo es obligatorio",
};

export const s_nombre = {
  required: "Este campo es obligatorio",
};

export const p_apellido = {
  required: "Este campo es obligatorio",
};

export const s_apellido = {
  required: "Este campo es obligatorio",
};

export const email = {
  required: "Este campo es obligatorio",
  pattern: {
    value: /^[A-Z0-9._%+-]+[A-Z0-9]+@[A-Z0-9.-]+\.[A-Z]{2,}\s*$/i,
    message: "El correo no es válido",
  },
};

export const signUpPassword = {
  required: "Este campo es obligatorio",
  minLength: {
    value: 8,
    message: "La contraseña debe tener minimo 8 caracteres",
  },
};
export const confirmPassword = {
  required: "Este campo es obligatorio",
  validate: (value, { password1 }) =>
    value === password1 || "Las contraseñas deben ser iguales",
};
export const loginPassword = {
  required: "Este campo es obligatorio",
};
