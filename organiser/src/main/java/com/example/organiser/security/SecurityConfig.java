package com.example.organiser.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.organiser.security.jwt.AuthEntryPointJwt;
import com.example.organiser.security.jwt.AuthTokenFilter;
import com.example.organiser.security.services.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
		// securedEnabled = true,
		// jsr250Enabled = true,
		prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	UserDetailsServiceImpl userDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	@Bean
	public AuthTokenFilter authenticationJwtTokenFilter() {
		return new AuthTokenFilter();
	}

	@Override
	public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable()
		.exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
		.authorizeRequests()
		//.antMatchers(HttpMethod.GET,"/posts/**","/comments/**","/post/**").permitAll()
		.antMatchers("/signin","/signup","/updateprofile","/password","/updateavatar","/api/auth/**", "/api/auth/lists/**",  "/api/auth/events/**", "/api/auth/things/**", "/api/auth/lists/**/things/**", "/api/auth/things/**/check").permitAll()
		.antMatchers(HttpMethod.GET,"api/auth/**",  "/api/auth/lists/**", "/api/auth/events/**", "/api/auth/things/**", "/api/auth/lists/**/things/**","/api/auth/things/**/check").permitAll()
		.antMatchers(HttpMethod.DELETE, "api/auth/**", "/api/auth/lists/**", "/api/auth/events/**", "/api/auth/things/**", "/api/auth/lists/**/things/**", "/api/auth/things/**/check").permitAll()
		.antMatchers(HttpMethod.PUT,"api/auth/**",  "/api/auth/lists", "/api/auth/events", "/api/auth/things", "/api/auth/lists/**/things", "/api/auth/things/**/check").permitAll()
		.antMatchers("/api/test/**").permitAll()
		.anyRequest().authenticated();

		/*http.cors().and().csrf().disable()
			.exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.authorizeRequests().antMatchers("/api/auth/**").permitAll()
			.antMatchers("/api/test/**").permitAll()
			.anyRequest().authenticated();*/

		http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
	}
}
