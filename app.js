//Declaramos la clase y su constructor
class ProductManager {
    constructor(){
        this.products = []
    }
// Incializamos la variable ID de forma Estatica
    static id = 0
//Declaramos el metodo AddProduct y los parametros que debe recibir con su respectiva validación
    addProduct(title, description, price, img, code, stock){
        if(!title && !description && !price && !img && !code && !stock){
            console.log("Error: Todos los campos son obligatorios.")
            return;
        }
//Utilizo el metodo Some para verificar si al menos un elemento de array cumple con dicha condición        
        if(this.products.some(product => product.code === code)){
            console.log("Error: el codigo ya se encuentra en uso.");
        }else{
//Declaro que por cada elemento que se agregue al arreglo se incremente el ID
            ProductManager.id++;
            this.products.push({
                title,
                description,
                price,
                img,
                code,
                stock,
                id: ProductManager.id
            })
        }
    }
//Metodo getProducts que retorna el arreglo
    getProducts(){
        
        return this.products;
    }
//Utilizo este metodo para verificar si existe algun producto con ese ID unico
    existe(id){
        return this.products.find((producto)=> producto.id === id)
    }
// Metodo para capturar el ID del producto 
    getProductById(id){
        !this.existe(id) ? console.error("Error al obtener el ID") : console.log(this.existe(id));
    }
}

const manager = new ProductManager
console.log(manager.getProducts());

//Agregamos Productos a nuestro arreglo

manager.addProduct("Shampoo", "Con ph neutro para toda la carroceria", 500, "img", "shp252", 1)
manager.addProduct("Acondicionador", "para el interior del auto", 700, "img", "aco262", 2)
//Llamamos al arreglo para visualizar el producto agregado
console.log(manager.getProducts());

//Verificamos en caso de que el codigo se repita

manager.addProduct("Acondicionador", "para el interior del auto", 700, "img", "shp252", 1)
console.log(manager.getProducts());

//Verifico ID
manager.getProductById(2)

//Verifico ID no encontrado
manager.getProductById(3)

//Agrego un producto con faltante de campo obligatorio

manager.addProduct("", "para el interior del auto", "img", "shp252", 1)
