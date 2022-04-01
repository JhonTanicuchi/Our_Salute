const persona = (sequelize, type) => {
  return sequelize.define(
    "persona",
    {
      id_persona: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cedula: type.STRING,
      nombre1: type.STRING,
      nombre2: type.STRING,
      apellido1: type.STRING,
      apellido2: type.STRING,
      fecha_nacimiento: type.STRING,
      direccion: type.STRING,
      creacionPersona: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionPersona: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP "),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = persona;
