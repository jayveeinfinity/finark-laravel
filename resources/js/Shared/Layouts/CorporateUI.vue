<template>
    <body class="g-sidenav-show">
        <SideBar />
        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
            <NavBarAlt :page="page" />
            <slot />
        </main>
    </body>
</template>

<script>
    export default {
        data() {
            return {
                page: "Dashboard",
                pages: [
                    { id: 1, name: "Dashboard", url: "/admin/home" },
                    { id: 2, name: "Partners", url: "/admin/partners" },
                    { id: 3, name: "Blogs", url: "/admin/blogs" },
                    { id: 4, name: "Appointments", url: "/admin/appointments" },
                    { id: 5, name: "Create", url: "/admin/blog/create" },
                    { id: 6, name: "Create", url: "/admin/partner/create" },
                    { id: 7, name: "Users", url: "/admin/users" },
                    { id: 8, name: "Create", url: "/admin/blogs/create" },
                    { id: 9, name: "Courses", url: "/admin/courses" }
                ]
            }
        },
        created() {
            this.pages.forEach(page => {
                if(page.url == this.$page.url) {
                    this.page = page.name;
                    return;
                }
            });
        }
    }
</script>

<script setup>
    import SideBar from '../Partials/CorporateUI/Sidebar';
    import NavBar from '../Partials/CorporateUI/Navbar';
    import NavBarAlt from '../Partials/CorporateUI/NavbarAlt';
</script>
