package com.template.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:/database.properties")
public class DatabaseConfig {

    @Value("${jdbc.driver}")
    private String driver;
    @Value("${jdbc.url}")
    private String url;
    @Value("${jdbc.username")
    private String username;
    @Value("${jdbc.password")
    private String password;

    @Bean
    public DataSource dataSource(){
        return null;
    }
    
}
