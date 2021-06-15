/// <reference types="cypress" />

it('Equality', () =>{
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b')
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).not.to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () => {
    const Object = {
        a: 1,
        b: 2
    }

    expect(Object).equal(Object)
    expect(Object).equals(Object)
    expect(Object).eq(Object)
    expect(Object).to.be.equal(Object)
    expect(Object).to.be.deep.equal({a: 1, b: 2})
    expect(Object).eql({a: 1, b: 2})
    expect(Object).include({ a: 1 })
    expect(Object).to.have.property('b')
    expect(Object).to.have.property('b', 2)
    expect(Object).to.not.be.empty
    expect({}).to.be.empty


})  

it("Arrays", () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1, 2, 3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/de/)
    expect(str).to.match(/String/)
    expect(str).to.match(/^String/) //quando começa ^String
    expect(str).to.match(/teste$/) //quando termina teste$
    expect(str).to.match(/.{15}/) // quantidade de caracter 
    expect(str).to.match(/\W+/) // somente letras
    expect(str).to.match(/\D+/) // somente números
})

it('Number', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3) //verificar número acima de 3
    expect(number).to.be.below(7) //verificar número abaixo0 de 7
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1) // comparar número próximo 
    expect(floatNumber).to.be.above(5) // verifica acima de
    
})