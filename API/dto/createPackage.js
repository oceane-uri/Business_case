class CreatePackageDTO {
    constructor(description, weight, width, height, depth, from_name, from_adress, from_location, to_name, to_adress, to_location) {
        this.description = description;
        this.weight= weight;
        this.width= width;
        this.height = height;
        this.depth = depth;
        this.from_name = from_name;
        this.from_adress = from_adress;
        this.from_location = from_location;
        this.to_name = to_name;
        this.to_adress = to_adress;
        this.to_location = to_location;

    }

    // getFormattedPrice() {
    //     return `$${this.price.toFixed(2)}`;
    // }

    // static fromProductEntity(productEntity) {
    //     return new ProductDTO(
    //         productEntity.id,
    //         productEntity.name,
    //         productEntity.price,
    //         productEntity.description);
    // }
}