export const SUPERADMIN = 1;
export const ADMIN = 2;
export const USER = 3;
export const roleTypes = [
    { label: "Admin", value: ADMIN },
    { label: "Super Admin", value: SUPERADMIN },
    { label: "User", value: USER },
];

export function userRole(role) {
    return roleTypes.find((e)=>e.value===role);
}
