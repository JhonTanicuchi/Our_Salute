const usuario_paciente = (sequelize, type) => {
  return sequelize.define(
    "usuario_paciente",
    {
      id_usuario_paciente: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: type.STRING(99),
      password: type.STRING,
      correo: type.STRING,
      fecha_creacion: type.STRING,
      creacionUsuarios: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionUsuarios: {
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

module.exports = usuario_paciente;