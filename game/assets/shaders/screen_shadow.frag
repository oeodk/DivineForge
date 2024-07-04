uniform vec2 u_player_pos;
uniform float u_radius_factor;
//uniform float u_opacity_factor;

void main()
{
	vec2 fragPos = gl_FragCoord.xy;
	float color = min(distance(fragPos, u_player_pos) / (u_radius_factor * 350.f), 150/255.f);
	gl_FragColor = vec4(0, 0, 0, color);
}