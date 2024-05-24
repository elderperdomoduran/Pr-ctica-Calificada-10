import express from 'express'
import { PORT } from './config/config.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import rolesRoutes from './routes/roles.routes.js'

const app = express()

app.use(express.json())

app.use('/api/usuarios', usuariosRoutes)
app.use('/api/roles', rolesRoutes)

app.listen(PORT, () => console.log(`Application on http://localhost:${PORT}`))
