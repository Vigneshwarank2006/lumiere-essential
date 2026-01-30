// Simple validation script
import { existsSync } from 'fs';

console.log('🧪 Starting Authentication Tests...\n');

const tests = {
    passed: 0,
    failed: 0,
    results: []
};

function test(name, condition) {
    if (condition) {
        tests.passed++;
        tests.results.push(`✅ ${name}`);
    } else {
        tests.failed++;
        tests.results.push(`❌ ${name}`);
    }
}

async function runTests() {
    // Test 1: Check Firebase config exists
    const configExists = existsSync('./firebase.ts');
    test('Firebase config file exists', configExists);

    // Test 2: Check AuthContext exists
    const authContextExists = existsSync('./context/AuthContext.tsx');
    test('AuthContext file exists', authContextExists);

    // Test 3: Check SignIn page exists
    const signInExists = existsSync('./pages/Login.tsx');
    test('SignIn page exists', signInExists);

    // Test 4: Check SignUp page exists
    const signUpExists = existsSync('./pages/Signup.tsx');
    test('SignUp page exists', signUpExists);

    // Test 5: Check ProtectedRoute exists
    const protectedRouteExists = existsSync('./components/ProtectedRoute.tsx');
    test('ProtectedRoute component exists', protectedRouteExists);

    // Test 6: Check environment variables
    const envExists = existsSync('./.env.local');
    test('Environment file exists', envExists);

    // Print results
    console.log('\n📊 TEST RESULTS:');
    console.log('================');
    tests.results.forEach(r => console.log(r));
    console.log('================');
    console.log(`Total: ${tests.passed + tests.failed} | Passed: ${tests.passed} | Failed: ${tests.failed}`);

    if (tests.failed > 0) {
        console.log('\n⚠️  Some tests failed. Please fix issues before proceeding.');
        process.exit(1);
    } else {
        console.log('\n🎉 All tests passed! Authentication setup is complete.');
    }
}

runTests().catch(console.error);
