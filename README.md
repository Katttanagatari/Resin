public class Main {
    public static void main(String[] args) {
        Auto.Model[] models = new Auto.Model[3];
        models[0] = new Auto.Model("ModelA", 25000.0);
        models[1] = new Auto.Model("ModelB", 30000.0);
        models[2] = new Auto.Model("ModelC", 35000.0);

        Auto auto = new Auto("Brand1", models);

        System.out.println("Initial brand: " + auto.getBrand());
        System.out.println("Initial model names: " + String.join(", ", auto.getModelNames()));

        auto.setBrand("NewBrand");
        auto.setModelName(1, "NewModelB");

        System.out.println("Modified brand: " + auto.getBrand());
        System.out.println("Modified model names: " + String.join(", ", auto.getModelNames()));
    }
}

нг