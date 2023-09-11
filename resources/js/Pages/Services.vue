<template>
  <Head title="Services &sdot; " />
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <a href="services/financial-planning-adults">
          <div class="card services rounded-5 shadow">
            <FontAwesomeIcon icon="fa-solid fa-money-bill-wave" class="services--icon text-yellow" />
            <h2>Financial Planning (Adults)</h2>
            <p>
              Managing your financial resources in order to achieve your long-term goals and objectives.
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <a href="services/financial-planning-children">
          <div class="card services rounded-5 shadow">
            <FontAwesomeIcon icon="fa-solid fa-hands-holding-child" class="services--icon text-primary" />
            <h2>Financial Planning (Children)</h2>
            <p class="text-muted">
              Secure financial future for children to achieve their goals and reach their full potential.
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <a href="services/insurance-portfolio-review">
          <div class="card services rounded-5 shadow">
            <FontAwesomeIcon icon="fa-solid fa-file-invoice" class="services--icon text-success" />
            <h2>Insurance Portfolio Review</h2>
            <p>
              Individuals and businesses can reduce their overall financial exposure to loss and ensure that they are protected against a variety of events.
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <a href="services/savings-and-investment-plans">
          <div class="card services rounded-5 shadow">
            <FontAwesomeIcon icon="fa-solid fa-money-bill-trend-up" class="services--icon text-indigo" />
            <h2>Savings & Investment Plan</h2>
            <p>
              Maximize your returns while minimizing risk, and to provide a tailored investment strategy that aligns with your financial goals and objectives.
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <a href="services/retirement-planning">
          <div class="card services rounded-5 shadow">
            <FontAwesomeIcon icon="fa-solid fa-person-cane" class="services--icon text-purple" />
            <h2>Retirement Planning</h2>
            <p>
              Save enough money over your working years to maintain your standard of living after you stop working.
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <a href="services/loan-advisory">
          <div class="card services rounded-5 shadow">
            <FontAwesomeIcon icon="fa-solid fa-sack-dollar" class="services--icon text-pink" />
            <h2>Loan Advisory</h2>
            <p>
              Avoid costly mistakes and manage your debt, ultimately improving your financial health and stability.
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <a href="services/investment-advisory">
          <div class="card services rounded-5 shadow">
            <FontAwesomeIcon icon="fa-solid fa-piggy-bank" class="services--icon text-warning" />
            <h2>Investment Advisory</h2>
            <p>
              Build and manage your investment portfolios, achieve financial goals, and navigate the complexities of the financial markets.
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <a href="services/general-insurance">
          <div class="card services rounded-5 shadow">
            <FontAwesomeIcon icon="fa-solid fa-universal-access" class="services--icon text-danger" />
            <h2>General Insurance</h2>
            <p>
              Manage financial risks and reduce your overall financial exposure to losses.
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <a href="services/estate-planning">
          <div class="card services rounded-5 shadow">
            <FontAwesomeIcon icon="fa-solid fa-house-chimney" class="services--icon text-yellow" />
            <h2>Estate Planning</h2>
            <p>
              Create a plan that ensure your assets are distributed in accordance with your wishes.
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <a href="services/business-continuity">
          <div class="card services rounded-5 shadow">
            <FontAwesomeIcon icon="fa-solid fa-briefcase" class="services--icon text-primary" />
            <h2>Business Continuity</h2>
            <p>
              Minimize the potential impact of a disruptive event and ensure the survival and long-term success of the organization.
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Landing from './../Shared/Layouts/Landing';

  export default {
    layout: Landing
  }
</script>