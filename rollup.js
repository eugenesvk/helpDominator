import rust      	from "@wasm-tool/rollup-plugin-rust"
import serve     	from "rollup-plugin-serve"
import livereload	from "rollup-plugin-livereload"
import terser    	from "@rollup/plugin-terser"

const is_watch = !!process.env.ROLLUP_WATCH;

const cfg =[{
input  	: {index:"./Cargo.toml",},
output 	: {dir:"dist/js",format:"iife",sourcemap:true,},
plugins	: [
  rust({serverPath:"js/",}),
  is_watch && serve({contentBase:"dist",open:true,}),
  is_watch && livereload("dist"),
 !is_watch && terser(),
],
}]

export default cfg
