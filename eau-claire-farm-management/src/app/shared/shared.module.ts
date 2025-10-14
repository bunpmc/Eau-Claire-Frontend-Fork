import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Import shared components
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Sidebar } from "./components/sidebar/sidebar";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Header,
        Footer,
        Sidebar
    ],
    exports: [
        Header,
        Footer,
        Sidebar,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class SharedModule { }