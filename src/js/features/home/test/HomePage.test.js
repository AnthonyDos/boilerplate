describe("<HomePage />", () => {

	test("des données", () => {
		const datas = ["pok 1", "pok 2", "pok 3"];
		const datasNull = null;

		expect(datas).toHaveLength(3);
		expect(datas[0]).toBe("pok 1");
		expect(datas[1]).not.toBe("pok 3");
		expect(datasNull).toBeNull();
	});
});