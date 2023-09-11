<template>
    <div class="container py-5">
        <div class="mt-lg-5 mt-4">
            <div v-if="page == 'financial-planning-adults'">
                <FinancialPlanningAdults />
            </div>
            <div v-else-if="page == 'financial-planning-children'">
                <FinancialPlanningChildren />
            </div>
            <div v-else-if="page == 'insurance-portfolio-review'">
                <InsurancePortfolioReview />
            </div>
            <div v-else-if="page == 'savings-and-investment-plans'">
                <SavingsAndInvestmentPlans />
            </div>
            <div v-else-if="page == 'retirement-planning'">
                <RetirementPlanning />
            </div>
            <div v-else-if="page == 'loan-advisory'">
                <LoanAdvisory />
            </div>
            <div v-else-if="page == 'investment-advisory'">
                <InvestmentAdvisory />
            </div>
            <div v-else-if="page == 'general-insurance'">
                <GeneralInsurance />
            </div>
            <div v-else-if="page == 'estate-planning'">
                <EstatePlanning />
            </div>
            <div v-else-if="page == 'business-continuity'">
                <BusinessContinuity />
            </div>
        </div>
    </div>
</template>

<script setup>
    import FinancialPlanningAdults from './../Pages/Services/FinancialPlanningAdults';
    import FinancialPlanningChildren from './../Pages/Services/FinancialPlanningChildren';
    import InsurancePortfolioReview from './../Pages/Services/InsurancePortfolioReview';
    import SavingsAndInvestmentPlans from './../Pages/Services/SavingsAndInvestmentPlans';
    import RetirementPlanning from './../Pages/Services/RetirementPlanning';
    import LoanAdvisory from './../Pages/Services/LoanAdvisory';
    import InvestmentAdvisory from './../Pages/Services/InvestmentAdvisory';
    import GeneralInsurance from './../Pages/Services/GeneralInsurance';
    import EstatePlanning from './../Pages/Services/EstatePlanning';
    import BusinessContinuity from './../Pages/Services/BusinessContinuity';
</script>

<script>
    import ServicesLayout from './../Shared/Layouts/Services';

    export default {
        layout: ServicesLayout,
        props: {
            page: String
        }
    }
</script>