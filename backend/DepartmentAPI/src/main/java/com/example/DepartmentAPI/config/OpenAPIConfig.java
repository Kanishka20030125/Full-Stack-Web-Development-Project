package com.example.DepartmentAPI.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenAPIConfig {

    @Bean
    public OpenAPI myOpenAPI() {
        Server devServer = new Server();
        devServer.setUrl("http://localhost:8082");
        devServer.setDescription("Development server");

        Contact contact = new Contact();
        contact.setName("Department API Team");
        contact.setEmail("support@departmentapi.com");

        Info info = new Info()
                .title("Department API Documentation")
                .version("1.0")
                .contact(contact)
                .description("This API exposes endpoints to manage departments.");

        return new OpenAPI()
                .info(info)
                .servers(List.of(devServer));
    }
}