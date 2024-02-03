# Hola! 🖐

### Vercel Deploy 🚀

https://ej-2da-entrega-react-js.vercel.app/

## Sobre este repo

    Es un ejemplo de como se sugiere estructurar la segunda
    pre-entrega del proyecto final del curso de React Js de CoderHouse

### Componentes ( 6-7 )

    App ( Se encuentra importado navbar , y se definen las rutas del proyecto  👉  Rutas con react-router-dom)
    Navbar
    CartWidget
    ItemListContainer ( Logica de filtrar por categoria )
    ItemList ( Map de los productos filtrados o no, que renderizan Item) Puede no estar y hacer el map en ItemListContainer
    Item ( Componente que renderiza una card por cada producto )
    ItemDetailContainer ( Logica de buscar por id )
    ItemDetail ( Renderizar los datos del producto )
    ItemCount ( Componente encargado de manejar la cantidad que luego se agregará al carrito)

### Importaciones

    Crear <BrowserRouter>
    Crear <Routes>
    Crear <Route> con los distintos paths. (Categorias e items/id)
    ItemListContainer importado en App.js (Como elemento de ruta)
    ItemDetailContainer importado en App.js (Como elemento de ruta)
    Navbar importado en App.js ( Excluir de Routes , para que sea la misma en todas las rutas)
    CartWidget importado en Navbar.jsx
    ItemCount importado en cada card y/o ItemDetail

#### Comentarios

    Los estilos quedan a gusto de cada estudiante.
    No son requerimiento ya que el proyecto se enfoca en aprender ReactJs
    pero es bueno que este presentable.
