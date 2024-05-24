import rolesModel from '../models/roles.model.js'

export const index = async (req, res) => {
  const roles = await rolesModel.all()
  res.json(roles)
}
