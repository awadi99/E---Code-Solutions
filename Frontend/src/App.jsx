import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "./components/common/Loading";

// Lazy loaded pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Profile = lazy(() => import("./pages/Profile"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Docs = lazy(() => import("./pages/Docs"));
const Items = lazy(() => import("./pages/Items"));
const AddProducts = lazy(() => import("./pages/AddProducts"));
const Store = lazy(() => import("./pages/Store"));
const Invoice = lazy(() => import("./pages/Invoice"));

export default function App() {
    return (
        <Suspense
        fallback={
          <div className="flex min-h-screen flex-col items-center justify-center bg-black">
            <Loading/>
          </div>
      }
        >
            <Routes>

                {/* Landing Page */}
                <Route
                    path="/"
                    element={<LandingPage />}
                />

                <Route
                    path="/home"
                    element={<LandingPage />}
                />

                {/* Authentication */}
                <Route
                    path="/sign-in"
                    element={<SignIn />}
                />

                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />

                {/* User */}
                <Route
                    path="/profile"
                    element={<Profile />}
                />

                {/* Information */}
                <Route
                    path="/docs"
                    element={<Docs />}
                />

                {/* Products */}
                <Route
                    path="/items"
                    element={<Items />}
                />

                <Route
                    path="/addproducts"
                    element={<AddProducts />}
                />

                {/* Store */}
                <Route
                    path="/store"
                    element={<Store />}
                />

                {/* Invoice */}
                <Route
                    path="/invoice"
                    element={<Invoice />}
                />

                {/* Unknown URL → Home */}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </Suspense>
    );
}