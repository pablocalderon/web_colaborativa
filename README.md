#Web Colaborativa 2025 – Curso de Programación

Este proyecto forma parte de la asignatura Programación, y tiene como objetivo que los estudiantes desarrollen una aplicación web colaborativa utilizando buenas prácticas de trabajo en equipo, control de versiones con GitHub y gestión ágil de tareas mediante Trello.


comandos : 
Agregar todos los cambios.
    git add .
si solo quieres agregar el componente nuevo:
    git add app/components/modulo-clientes.tsx
verificar el estatus: 
    git status

commit con un mensaje descriptivo:
git commit -m "Agrega componente modulo-clientes"
feat(components): agrega componente modulo-clientes
fix(ui): corrige error de estilos en footer
refactor(api): reorganiza controladores de NestJS
docs(readme): añade instrucciones para ejecutar el proyecto
chore(config): elimina console.log innecesarios

Comandos para el ejemplo:
git add /components/modulo-clientes.tsx
git commit -m "feat(components): agrega componente modulo-clientes"
git push

Se agrega el README.md
    git add README.md
    git commit -m "docs(readme): actualiza instrucciones del proyecto"
    git push

    Crear una nueva rama:

    verificar cual es su rama
        git branch
    cambiar a la rama Main o Master:
        git checkout master 
    crear la nueva rama:
        git branch lopez
    cambiar a la nueva rama:
        git checkout lopez
    berificamos que estamos en la nueva rama:
        git branch
   Subir la rama lopez a GitHub:
    git push -u origin lopez

    Crear la nueva rama desde master a calderon
        git checkout -b calderon
    Subir contenido a la nueva rama calderon:
        sugit push -u origin calderon

    Actualiza tu copia local desde GitHub de Master.
        git pull origin master
    Verifica que todo esté actualizado:
        git status