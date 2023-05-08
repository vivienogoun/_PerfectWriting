import { UserStore } from "../user";

const store = new UserStore()

// eslint-disable-next-line no-undef
describe("User Model", () => {
    // eslint-disable-next-line no-undef
    it('should have an index method', () => {
        // eslint-disable-next-line no-undef
        expect(store.index).toBeDefined();
    });
    
    // eslint-disable-next-line no-undef
    it('should have a show method', () => {
        // eslint-disable-next-line no-undef
        expect(store.show).toBeDefined();
    });

    // eslint-disable-next-line no-undef
    it('should have a create method', () => {
        // eslint-disable-next-line no-undef
        expect(store.create).toBeDefined();
    });

    // eslint-disable-next-line no-undef
    it('should have a remove method', () => {
        // eslint-disable-next-line no-undef
        expect(store.remove).toBeDefined();
    });
})