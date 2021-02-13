package com.template.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

@Configuration
public class CommonConfig {


    @Bean
    public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer(){
        return new PropertySourcesPlaceholderConfigurer();
        /*

        ${~~~}를 Environment 객체로 지정하는 빈 -> BeanFactoryPostProcessor를 구현
        이거 안쓰면 @Autowired Environment env; env.getProperty("~~~"); 로 사용 가능
        
        */
    }
    
}
