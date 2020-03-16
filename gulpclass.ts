import {Gulpclass, SequenceTask, Task} from "gulpclass/Decorators";
import * as ts from "gulp-typescript";
import * as gulp from "gulp";
import * as del from "del";

const tsProject = ts.createProject("src/tsconfig.json");

@Gulpclass()
export class Gulpfile {
    @Task()
    ts() {
        return tsProject.src()
                        .pipe(tsProject())
                        .js.pipe(gulp.dest('dist'));
    }

    @SequenceTask()
    default() {
        return ["ts"];
    }

    @Task()
    clean() {
        return del([
                       "dist",
                   ]);
    }
}
