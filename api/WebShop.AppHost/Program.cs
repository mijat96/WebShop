var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.WebShop_Server>("webshop");

builder.Build().Run();
