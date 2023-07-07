const app = Vue.createApp({
    data() {
        return {
            productos: [],
            consultaNombre: '',
            consultaResultado: '',
            altaResultado: '',
            modificarResultado: '',
            eliminaResultado: '',
            eliminaCodigo: '',
            altaNombre: '',
            altaDescripcion: '',
            altaStock: '',
            altaPrecio: '',
            modificarCodigo: '',
            modificarNombre: '',
            modificarNuevaDescripcion: '',
            modificarNuevoStock: '',
            modificarNuevoPrecio: '',
            mostrarConsulta: false,
            mostrarAlta: false,
            mostrarModificar: false,
            mostrarEliminar: false,
        };
    },
    methods: {
        consultarProducto() {
            fetch(`https://apiedison.pythonanywhere.com/productos/${this.consultaCodigo}`)
                .then(response => response.json())
                .then(producto => {
                    if (producto && producto.codigo) {
                        this.consultaResultado = `
                            <table>
                                <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Stock</th>
                                    <th>Precio</th>
                                </tr>
                                <tr>
                                    <td>${producto.codigo}</td>
                                    <td>${producto.nombre}</td>
                                    <td>${producto.descripcion}</td>
                                    <td>${producto.stock}</td>
                                    <td>${producto.precio}</td>
                                </tr>
                            </table>
                    `;
                    } else {
                        this.consultaResultado = 'Producto no encontrado';
                    }
                })
                .catch(error => {
                    console.error(error);
                    this.consultaResultado = 'Error al realizar la consulta';
                });
        },
        altaProducto() {
            fetch('https://apiedison.pythonanywhere.com/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: this.altaNombre,
                    descripcion: this.altaDescripcion,
                    stock: this.altaStock,
                    precio: this.altaPrecio
                })
            })
                .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(producto => {
                                this.altaNombre = '';
                                this.altaDescripcion = '';
                                this.altaStock = '';
                                this.altaPrecio = '';
                                this.listarProductos();
                                this.altaResultado = producto.mensaje;
                            });
                    } else {
                        this.altaResultado = 'Alta no efectuada';
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        modificarProducto() {
            fetch(`https://apiedison.pythonanywhere.com/productos/${this.modificarCodigo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    codigo: this.modificarCodigo,
                    nombre: this.modificarNombre,
                    descripcion: this.modificarNuevaDescripcion,
                    stock: this.modificarNuevoStock,
                    precio: this.modificarNuevoPrecio
                })
            })
                .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(producto => {
                                this.modificarCodigo = '';
                                this.modificarNuevaDescripcion = '';
                                this.modificarNombre = '';
                                this.modificarNuevoStock = '';
                                this.modificarNuevoPrecio = '';
                                this.listarProductos();
                                this.modificarResultado = 'Modificación realizada';
                                setTimeout(() => {
                                    this.modificarResultado = '';
                                    
                                }, 1200);
                            });
                    } else {
                        this.modificarResultado = 'Modificación no efectuada';
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        eliminarProducto() {
            fetch(`https://apiedison.pythonanywhere.com/eliminar/${this.eliminaCodigo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }

            })
                .then(response => {
                    response.json()
                        .then(producto => {
                            this.listarProductos();
                            this.eliminaResultado = producto.mensaje;
                        });

                })
                .catch(error => {
                    console.error(error);
                });
        },
        listarProductos() {
            fetch('https://apiedison.pythonanywhere.com/productos')
                .then(response => response.json())
                .then(productos => {
                    this.productos = productos;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        viewModificar(index) {
            const formulario = document.getElementById("formularioModificar");
            formulario.scrollIntoView({ behavior: "smooth" });

        },
        esperModif(index) {
            this.mostrarEliminar = false;
            this.mostrarConsulta = false;
            this.mostrarAlta = false;
            this.mostrarModificar = true;
            


            setTimeout(() => {
                this.viewModificar(index);
                this.modificarCodigo = (document.getElementById('codigo' + index.target.id).textContent)
                this.modificarNombre = (document.getElementById('nombre' + index.target.id).textContent)
                this.modificarNuevaDescripcion = (document.getElementById('descripcion' + index.target.id).textContent)
                this.modificarNuevoStock =(document.getElementById('stock' + index.target.id).textContent)
                this.modificarNuevoPrecio = (document.getElementById('precio' + index.target.id).textContent)

                
            }, 0);
        },
        viewConsul(index) {
            const formulario = document.getElementById('formularioConsul');
            formulario.scrollIntoView({ behavior: 'smooth' });
        },
        esperConsul(index) {
            this.mostrarEliminar = false;
            this.mostrarConsulta = true;
            this.mostrarAlta = false;
            this.mostrarModificar = false;

            setTimeout(() => {
                this.viewConsul(index);
            }, 0);
        },
        viewElimi(index) {
            const formulario = document.getElementById('formularioElimi');
            formulario.scrollIntoView({ behavior: 'smooth' });
        },
        esperElimin(index) {
            this.mostrarEliminar = true;
            this.mostrarConsulta = false;
            this.mostrarAlta = false;
            this.mostrarModificar = false;

            setTimeout(() => {
                this.viewElimi(index);
            }, 0);
        },
        viewAlta(index) {
            const formulario = document.getElementById('formularioAlta');
            formulario.scrollIntoView({ behavior: 'smooth' });
        },
        esperAlta(index) {
            this.mostrarEliminar = false;
            this.mostrarConsulta = false;
            this.mostrarAlta = true;
            this.mostrarModificar = false;

            setTimeout(() => {
                this.viewAlta(index);
            }, 0);
        },
    },


    mounted() {
        this.listarProductos();
        this.mostrarEliminar = false;
        this.mostrarConsulta = false;
        this.mostrarAlta = false;
        this.mostrarModificar = false;
    },
});


app.mount('#app');
