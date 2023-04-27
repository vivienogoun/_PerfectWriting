import { User, UserStore } from "../user";

const store = new UserStore()

describe("User Model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    
    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });

    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });

    it('should have a remove method', () => {
        expect(store.remove).toBeDefined();
    });
})