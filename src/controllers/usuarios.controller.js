import usuariosModel from '../models/usuarios.model.js'

export const index = async (req, res) => {
  const usuarios = await usuariosModel.all()
  res.json(usuarios)
}
export const remove = async (req, res) => {
  const { id } = req.params

  const eliminado = await usuariosModel.remove(id)

  if (eliminado) {
    return res.json({ message: 'Uusuario eliminado' })
  } else {
    return res.status(500).json({ message: 'No se pudo eliminar usuario' })
  }
}
export const store = async (req, res) => {
  try {
    const { nombre, email, rolId } = req.body

    if (!nombre || !email || !rolId) return res.status(400).json({ message: 'Faltan datos en el formulario' })

    const imagen = 'pablito.jpg'

    const resultado = await usuariosModel.create({ nombre, email, rolId, imagen })

    if (resultado) {
      return res.status(201).json({ message: 'Uusuario creado' })
    } else {
      return res.status(500).json({ message: 'No se pudo crear usuario' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Error interno' })
  }
}
export const update = async (req, res) => {
  try {
    const { nombre, email, rolId } = req.body
    const { id } = req.params

    if (!id || !nombre || !email || !rolId) return res.status(400).json({ message: 'Faltan datos en el formulario' })

    const imagen = 'pablito.jpg'

    const resultado = await usuariosModel.update({ id, nombre, email, rolId, imagen })

    if (resultado) {
      return res.json({ message: 'Usuario actualizado' })
    } else {
      return res.status(500).json({ message: 'No se pudo actualizar usuario' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Error interno' })
  }
}
